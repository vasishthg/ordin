from flask import Flask, render_template, request, session, redirect, url_for
import MySQLdb.cursors
import mysql.connector
from flask_mysqldb import MySQL
import mysql


app = Flask("__name__")
app.secret_key = "drip.inc"
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'toor'
app.config['MYSQL_DB'] = 'ordin'
db = mysql.connector.connect(host="localhost", user = "root", password = "toor", database = "ordin")

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')
    
@app.route("/login", methods=['GET', 'POST'])
def login():
    errmsg = ''
    if request.method == "POST" and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute('SELECT * FROM accounts WHERE email = %s AND password = %s', (email, password))
        account = cur.fetchone()
        if account:
            session['loggedin'] = True
            session['id'] = account['id']
            session['email'] = account['email']
            session['fname'] = account['fname']
            return redirect("/dashboard")
    else:
        errmsg= 'Invalid Data'
    return render_template("login.html", errmsg = errmsg)

@app.route('/dashboard')
def dashboard():
    if 'loggedin' in session:
        # User is loggedin show them the home page
        return render_template('dashboard.html', email=session['email'])
    # User is not loggedin redirect to login page
    return redirect('/login')

@app.route('/wallet')
def wallet():
    if 'loggedin' in session:
        # User is loggedin show them the home page
        return render_template('wallet.html', email=session['email'])
    # User is not loggedin redirect to login page
    return redirect('/login')

@app.route('/exchange')
def exchange():
    if 'loggedin' in session:
        # User is loggedin show them the home page
        return render_template('browse.html', email=session['email'], page = 'Exchange')
    # User is not loggedin redirect to login page
    return redirect('/login')

@app.route('/logout')
def logout():
    # Remove session data, this will log the user out
   session.pop('loggedin', None)
   session.pop('id', None)
   session.pop('username', None)
   # Redirect to login page
   return redirect(url_for('login'))

@app.route('/browse')
def browse():
    return render_template('browse.html',  page = 'Browse')

@app.route('/transactions')
def transactions():
    if 'loggedin' in session:
        return render_template('tr.html', email=session['email'])
    else:
        return redirect('/login')

if __name__ == "__main__":
    app.run(debug=True)
from flask import Blueprint
from flask import render_template


homepage_blueprint = Blueprint(
    'homepage_blueprint', __name__, template_folder='templates/')


@homepage_blueprint.route('/')
def homepage():
    return render_template('homepage.html')

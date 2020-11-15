from flask import render_template
from flask import url_for
from flask import Blueprint

flappy_blueprint = Blueprint('flappy_blueprint', __name__,
                             static_folder='static/', template_folder='templates/', static_url_path='assets')


@flappy_blueprint.route('/flappy')
def flappy():
    return render_template('flappy.html')

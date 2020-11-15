from flask import render_template
from flask import Blueprint

games_blueprint = Blueprint('games_blueprint', __name__,
                            static_folder='static/', template_folder='templates/')


@games_blueprint.route('/')
def games():
    return render_template('games.html')

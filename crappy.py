from flask import Flask
from Homepage.homepage import homepage_blueprint
from Games.games import games_blueprint
from Flappy_Bird.flappy import flappy_blueprint

crappy = Flask(__name__)
crappy.register_blueprint(homepage_blueprint)
crappy.register_blueprint(games_blueprint, url_prefix='/games')
crappy.register_blueprint(flappy_blueprint, url_prefix='/games')

if __name__ == "__main__":
    crappy.run(host='127.0.0.1', port=5000, debug=True)

from datetime import timedelta


from typing import Dict
class FlaskConfig:
    DEBUG = False
    CSRF_ENABLED = True  # Включение защиты против "Cross-site Request Forgery (CSRF)"

    JWT_COOKIE_CSRF_PROTECT = False
    JWT_ERROR_MESSAGE_KEY = "error"
    JWT_TOKEN_LOCATION = ['cookies']
    JWT_ACCESS_COOKIE_NAME = 'access_token'
    JWT_REFRESH_COOKIE_NAME = 'refresh_token'
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)
    JWT_SECRET_KEY = ""  # Случайный ключ, для подписи JWT

    def __init__(self, settings: Dict[str, str]):
        self.DEBUG = settings['DEBUG']
        self.JWT_SECRET_KEY = settings['JWT_SECRET_KEY']


class Config(object):
    log_level: str = "DEBUG"
    database: object = None
    flask: FlaskConfig = None

    def __init__(self, config: Dict[str, str]):
        self.flask = FlaskConfig(config['Flask'])
        self.database = config['Database']
        self.log_level = config['LOG_LEVEL']

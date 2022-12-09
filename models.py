from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

default_img_url = 'https://tinyurl.com/demo-cupcake'

class Cupcake(db.Model):
    """ Cupcake. """

    __tablename__ = "cupcakes"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False, default=default_img_url)

    def __repr__(self):
        return f'<Cupcake {self.id} {self.flavor} the {self.size}>'


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

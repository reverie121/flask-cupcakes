from flask_wtf import FlaskForm
from wtforms import TextField, FloatField
from wtforms.validators import InputRequired, Optional

class AddCupcakeForm(FlaskForm):
    """ Form for adding new user accounts. """

    flavor = TextField("Flavor", validators=[InputRequired()])
    size = TextField("Size", validators=[InputRequired()])
    rating = FloatField("Rating", validators=[InputRequired()])
    image = TextField("img URL", validators=[InputRequired(), Optional()])
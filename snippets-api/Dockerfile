FROM python:3.6
ENV PYTHONUNBUFFERED 1

# Allows docker to cache installed dependencies between builds
COPY ./requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Adds our application code to the image
COPY . /code
WORKDIR /code

# Exposes port 8000
EXPOSE 8000

# Migrates the database, uploads staticfiles, and runs the production server
CMD python wait_for_postgres.py && \
  python manage.py migrate && \
  python manage.py collectstatic --noinput && \
  sh load_data.sh && \
  newrelic-admin run-program gunicorn --bind 0.0.0.0:8000 --access-logfile - snippetsapi.wsgi:application

import datetime
from flask import Blueprint, jsonify
from .db import get_db_connection

bp = Blueprint("main", __name__)

def serialize_value(value):
    if isinstance(value, (datetime.datetime, datetime.date, datetime.time, datetime.timedelta)):
        return str(value)
    return value

@bp.route("/api/datos", methods=["GET"])
def obtener_datos():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM datos_invernadero ORDER BY id DESC")
    datos = cursor.fetchall()
    cursor.close()
    conn.close()

    datos_serializados = []
    for row in datos:
        datos_serializados.append({k: serialize_value(v) for k, v in row.items()})

    return jsonify(datos_serializados)

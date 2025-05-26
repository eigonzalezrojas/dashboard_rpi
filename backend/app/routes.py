from flask import Blueprint, jsonify
from .db import get_db_connection

bp = Blueprint("main", __name__)

@bp.route("/api/datos", methods=["GET"])
def obtener_datos():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM datos_invernadero ORDER BY id DESC LIMIT 10")
    datos = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(datos)

from flask import Blueprint, render_template, jsonify
import pymysql
from config import Config

bp = Blueprint('main', __name__)

@bp.route("/")
def index():
    return render_template("index.html")

@bp.route('/api/datos', methods=['GET'])
def obtener_datos():
    try:
        connection = pymysql.connect(
            host=Config.DB_HOST,
            user=Config.DB_USER,
            password=Config.DB_PASSWORD,
            database=Config.DB_NAME
        )
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT id, fecha_hora, temperatura_1, temperatura_agua_1, humedad_1, ph, ec, sensor_suelo
                FROM datos_invernadero
                ORDER BY fecha_hora DESC
                LIMIT 100
            """)
            columns = [desc[0] for desc in cursor.description]
            results = [dict(zip(columns, row)) for row in cursor.fetchall()]
        connection.close()
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

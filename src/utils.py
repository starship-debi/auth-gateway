import json
import logging
import os
import secrets
import uuid

from auth_gateway import settings

logger = logging.getLogger(__name__)

def generate_session_token():
    return secrets.token_urlsafe(32)

def generate_confirmation_token():
    return secrets.token_urlsafe(32)

def generate_password_reset_token():
    return secrets.token_urlsafe(32)

def generate_user_id():
    return str(uuid.uuid4())

def encode_json(data):
    return json.dumps(data, sort_keys=True, ensure_ascii=False)

def decode_json(data):
    try:
        return json.loads(data)
    except json.JSONDecodeError as e:
        logger.error(f"Failed to decode JSON: {e}")
        raise

def create_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def get_user_data_path(username):
    return os.path.join(settings.USER_DATA_DIR, f"{username}.json")
import sys
sys.path.append('..')
from app import app
application = app

# For Vercel Python runtime compatibility
if __name__ == "__main__":
    application.run()

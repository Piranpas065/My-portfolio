import sys
sys.path.append('..')
from app import app as application

# For Vercel Python runtime compatibility
if __name__ == "__main__":
    application.run()

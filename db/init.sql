-- CREATE DATABASE IF NOT EXISTS tasks_db
SELECT 'CREATE DATABASE tasks_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'tasks_db')\gexec
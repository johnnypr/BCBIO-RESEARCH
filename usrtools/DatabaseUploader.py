import sqlite3
import pandas as pd
from pandas import DataFrame


def create_database(name,path,table):

    # Connect to the database 
    # name must be extension .db
    connection = sqlite3.connect(name)
    cursor = connection.cursor()

    read_companies = pd.read_csv(path)
    read_companies.to_sql(table, connection, if_exists='append', index = False) 

    fields = read_companies.columns.tolist()
    df = DataFrame(cursor.fetchall(), columns=fields)
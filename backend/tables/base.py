from sqlalchemy import MetaData
from sqlalchemy.orm import declarative_base

# Define the shared MetaData object
metadata = MetaData()

# Use the metadata with the declarative base
Base = declarative_base(metadata=metadata)

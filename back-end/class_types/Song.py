from pydantic import BaseModel, field_serializer
from humps import camelize

class Song(BaseModel):
    service_name: str
    song_url: str

    class Config:
        alias_generator = camelize
        populate_by_name = True

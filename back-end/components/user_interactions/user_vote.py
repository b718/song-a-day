from class_types.VoteData import VoteData

def insert_row_in_data_base(vote_data: VoteData):
    return ""

def save_user_vote(vote_data: VoteData):
    insert_row_in_data_base(vote_data)
    print(vote_data)

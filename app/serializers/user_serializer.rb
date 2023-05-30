class UserSerializer < ActiveModel::Serializer
    attributes :email, :password, :id, :username
    has_many :favorites
end
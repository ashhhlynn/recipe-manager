class UserSerializer < ActiveModel::Serializer
    attributes :email, :username, :id
end
class User < ApplicationRecord
    has_many :favorites

    has_secure_password
    validates :username, length: { maximum: 50 }
    validates :email, length: { maximum: 50 }
end

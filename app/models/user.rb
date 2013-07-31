class User < ActiveRecord::Base

	validates :first_name, presence: true, length: { maximum: 25 }
	validates :last_name, presence: true, length: { maximum: 25 }
	validates :school, presence: true, length: { maximum: 50 }
	validates :phone_number, presence: true, length: { maximum: 25 }
end

# Fog.mock!
#
#
# # config.fog_credentials = {
# #   provider: "AWS",
# #   aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],
# #   aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
# #   region: ENV["AWS_REGION"]
# # }
# # config.fog_directory  = ENV["S3_BUCKET"]
# # config.fog_public = false
# #Fog.credentials_path = Rails.root.join('config/fog_credentials.yml')
# connection = Fog::Storage.new({
#   provider: "AWS",
#   aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],
#   aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
#   region: ENV["AWS_REGION"]
#   })
# connection.directories.create(:key => ENV["S3_BUCKET_DEV"])

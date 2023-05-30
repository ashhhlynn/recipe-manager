# exit on error
set -o errexit

rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate
bundle exec rails db:seed


#if you have seeds to run add:
# bundle exec rails db:seed
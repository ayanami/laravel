# laravel
## initialize
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ php artisan migrate
$ npm install webpack

## mail
$ php artisan tinker  
Mail::raw('test mail', function($message){$message->to('test@example.com')->subject('test');});  
http://localhost:3504

## update react component
$ npm install --save-dev @babel/preset-react axios bootstrap laravel-mix
$ npm install --save-dev react react-dom connected-react-router history prop-types
$ npm install --save-dev react-bootstrap@next react-router react-router-dom
$ npm install --save-dev react-hook-form

## update redux component
$ npm install --save-dev redux react-redux redux-persist redux-actions redux-logger redux-saga
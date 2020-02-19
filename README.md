# laravel

## mail
$ php artisan tinker  
Mail::raw('test mail', function($message){$message->to('test@example.com')->subject('test');});  
http://localhost:3504  

## update react component
$ npm install --save-dev react react-dom connected-react-router history prop-types  
$ npm install --save-dev react-bootstrap@next react-redux react-router react-router-dom  
$ npm install --save-dev redux redux-persist @babel/preset-react axios bootstrap laravel-mix  
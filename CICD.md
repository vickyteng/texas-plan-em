### Deploying to Heroku
1. Create a new Heroku application and push your application to a Git remote repository.
  If you do not provide a name for your application, Heroku will automatically generate a random one.

  ```
  $ heroku create [NAME]
  $ git push heroku master
  ```

    or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
2. Now, you need to set up configuration variables on Heroku. 
1. Go to Settings -> Reveal Config Vars.
2. Add configuration variables. All needed variables are inside _.env_. 
The configuration variable you need to assign: 
  ```API_HOST```.
3. Open application in the browser
  ```
  $ heroku open
  ```
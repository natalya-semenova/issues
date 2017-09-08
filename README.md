## shardTestFiles issue
Test run with `shardTestFiles: true` are not finished successfully - browser windows are not being closed and launcher reports that 'X instance(s) of WebDriver still running'

```bash
node -v
v8.4.0
```
```bash
protractor --version
Version 5.1.2
```
```bash
cucumber.js --version
3.0.1
```
```bash
protractor-cucumber-framework
version 4.0.4
```

## To reproduce

1. Update webdriver:

    ```bash
    npm run webdriver-update
    ```

1. Run tests 
    
    With default configuration that is specified in the `envConfig.json`:

    ```bash
    npm run e2e
    ```
    To override default configuration specify Protractor parameters to be changed / added: `capabilities.shardTestFiles`, `tags`, `params.spaUrl`. 

    ```bash
    npm run e2e --  --capabilities.shardTestFiles 0 
    ```
      which gonna run test with `shardTestFiles: false`.

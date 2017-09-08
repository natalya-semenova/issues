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

1. Output from running the test

    ```bash
     $ npm run e2e
     
     > shard_issue@1.0.0 e2e /home/nsemenova/Documents/aps/protShard
     > node scripts/protractor.js
     
     protractorArgs:	 [ '--params.spaUrl',
       'http://www.protractortest.org/testapp/ng1/',
       '--cucumberOpts.tags',
       '@tryIt_1 or @tryIt_2 or @tryIt_3 or @tryIt_4 or @tryIt_5',
       '--disableChecks' ]
     (node:13061) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [16:32:10] I/launcher - Running 4 instances of WebDriver
     .......[16:32:16] I/testLogger - 
     ------------------------------------
     
     [16:32:16] I/testLogger - [chrome #01-3] PID: 13084
     [chrome #01-3] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_2/sc2.feature
     [chrome #01-3] 
     [chrome #01-3] (node:13084) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-3] [16:32:11] I/local - Starting selenium standalone server...
     [chrome #01-3] [16:32:11] I/local - Selenium standalone server started at http://10.192.36.16:57336/wd/hub
     [chrome #01-3] Starting 'sc2.feature'
     [chrome #01-3] Gonna seleep for 7 milliseconds
     [chrome #01-3] Done sleeping
     [chrome #01-3] Finishing 'sc2.feature'
     [chrome #01-3] Starting 'sc2.feature'
     [chrome #01-3] Gonna seleep for 8 milliseconds
     [chrome #01-3] Done sleeping
     [chrome #01-3] Finishing 'sc2.feature'
     [chrome #01-3] 2 scenarios (2 passed)
     [chrome #01-3] 4 steps (4 passed)
     [chrome #01-3] 0m01.461s
     [chrome #01-3] [16:32:16] I/local - Shutting down selenium standalone server.
     [chrome #01-3] =======================
     [chrome #01-3] onCleanUp
     [chrome #01-3] ==========================
     [chrome #01-3] Exit code is: 0
     [chrome #01-3] ==========================
     
     [16:32:16] I/testLogger - 
     
     [16:32:16] I/launcher - 4 instance(s) of WebDriver still running
     ...[16:32:19] I/testLogger - 
     ------------------------------------
     
     [16:32:19] I/testLogger - [chrome #01-4] PID: 13887
     [chrome #01-4] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_3/sc1.feature
     [chrome #01-4] 
     [chrome #01-4] (node:13887) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-4] [16:32:17] I/local - Starting selenium standalone server...
     [chrome #01-4] [16:32:17] I/local - Selenium standalone server started at http://10.192.36.16:37806/wd/hub
     [chrome #01-4] Starting 'sc1.feature'
     [chrome #01-4] Gonna seleep for 9 milliseconds
     [chrome #01-4] Done sleeping
     [chrome #01-4] Finishing 'sc1.feature'
     [chrome #01-4] Starting 'sc1.feature'
     [chrome #01-4] Gonna seleep for 10 milliseconds
     [chrome #01-4] Done sleeping
     [chrome #01-4] Finishing 'sc1.feature'
     [chrome #01-4] 2 scenarios (2 passed)
     [chrome #01-4] 4 steps (4 passed)
     [chrome #01-4] 0m00.996s
     [chrome #01-4] [16:32:19] I/local - Shutting down selenium standalone server.
     [chrome #01-4] =======================
     [chrome #01-4] onCleanUp
     [chrome #01-4] ==========================
     [chrome #01-4] Exit code is: 0
     [chrome #01-4] ==========================
     
     [16:32:19] I/testLogger - 
     
     [16:32:19] I/launcher - 4 instance(s) of WebDriver still running
     ..[16:32:22] I/testLogger - 
     ------------------------------------
     
     [16:32:22] I/testLogger - [chrome #01-5] PID: 14138
     [chrome #01-5] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_3/sc2.feature
     [chrome #01-5] 
     [chrome #01-5] (node:14138) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-5] [16:32:20] I/local - Starting selenium standalone server...
     [chrome #01-5] [16:32:20] I/local - Selenium standalone server started at http://10.192.36.16:45377/wd/hub
     [chrome #01-5] Starting 'sc2.feature'
     [chrome #01-5] Gonna seleep for 11 milliseconds
     [chrome #01-5] Done sleeping
     [chrome #01-5] Finishing 'sc2.feature'
     [chrome #01-5] Starting 'sc2.feature'
     [chrome #01-5] Gonna seleep for 12 milliseconds
     [chrome #01-5] Done sleeping
     [chrome #01-5] Finishing 'sc2.feature'
     [chrome #01-5] 2 scenarios (2 passed)
     [chrome #01-5] 4 steps (4 passed)
     [chrome #01-5] 0m01.089s
     [chrome #01-5] [16:32:22] I/local - Shutting down selenium standalone server.
     [chrome #01-5] =======================
     [chrome #01-5] onCleanUp
     [chrome #01-5] ==========================
     [chrome #01-5] Exit code is: 0
     [chrome #01-5] ==========================
     
     [16:32:22] I/testLogger - 
     
     [16:32:22] I/launcher - 4 instance(s) of WebDriver still running
     ..[16:32:25] I/testLogger - 
     ------------------------------------
     
     [16:32:25] I/testLogger - [chrome #01-6] PID: 14341
     [chrome #01-6] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_4/sc1.feature
     [chrome #01-6] 
     [chrome #01-6] (node:14341) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-6] [16:32:23] I/local - Starting selenium standalone server...
     [chrome #01-6] [16:32:23] I/local - Selenium standalone server started at http://10.192.36.16:52365/wd/hub
     [chrome #01-6] Starting 'sc1.feature'
     [chrome #01-6] Gonna seleep for 13 milliseconds
     [chrome #01-6] Done sleeping
     [chrome #01-6] Finishing 'sc1.feature'
     [chrome #01-6] Starting 'sc1.feature'
     [chrome #01-6] Gonna seleep for 14 milliseconds
     [chrome #01-6] Done sleeping
     [chrome #01-6] Finishing 'sc1.feature'
     [chrome #01-6] 2 scenarios (2 passed)
     [chrome #01-6] 4 steps (4 passed)
     [chrome #01-6] 0m00.996s
     [chrome #01-6] [16:32:25] I/local - Shutting down selenium standalone server.
     [chrome #01-6] =======================
     [chrome #01-6] onCleanUp
     [chrome #01-6] ==========================
     [chrome #01-6] Exit code is: 0
     [chrome #01-6] ==========================
     
     [16:32:25] I/testLogger - 
     
     [16:32:25] I/launcher - 4 instance(s) of WebDriver still running
     ..[16:32:28] I/testLogger - 
     ------------------------------------
     
     [16:32:28] I/testLogger - [chrome #01-7] PID: 14544
     [chrome #01-7] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_4/sc2.feature
     [chrome #01-7] 
     [chrome #01-7] (node:14544) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-7] [16:32:26] I/local - Starting selenium standalone server...
     [chrome #01-7] [16:32:26] I/local - Selenium standalone server started at http://10.192.36.16:55679/wd/hub
     [chrome #01-7] Starting 'sc2.feature'
     [chrome #01-7] Gonna seleep for 15 milliseconds
     [chrome #01-7] Done sleeping
     [chrome #01-7] Finishing 'sc2.feature'
     [chrome #01-7] Starting 'sc2.feature'
     [chrome #01-7] Gonna seleep for 16 milliseconds
     [chrome #01-7] Done sleeping
     [chrome #01-7] Finishing 'sc2.feature'
     [chrome #01-7] 2 scenarios (2 passed)
     [chrome #01-7] 4 steps (4 passed)
     [chrome #01-7] 0m01.085s
     [chrome #01-7] [16:32:28] I/local - Shutting down selenium standalone server.
     [chrome #01-7] =======================
     [chrome #01-7] onCleanUp
     [chrome #01-7] ==========================
     [chrome #01-7] Exit code is: 0
     [chrome #01-7] ==========================
     
     [16:32:28] I/testLogger - 
     
     [16:32:28] I/launcher - 4 instance(s) of WebDriver still running
     ..[16:32:31] I/testLogger - 
     ------------------------------------
     
     [16:32:31] I/testLogger - [chrome #01-8] PID: 14761
     [chrome #01-8] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_5/sc1.feature
     [chrome #01-8] 
     [chrome #01-8] (node:14761) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-8] [16:32:29] I/local - Starting selenium standalone server...
     [chrome #01-8] [16:32:29] I/local - Selenium standalone server started at http://10.192.36.16:54978/wd/hub
     [chrome #01-8] Starting 'sc1.feature'
     [chrome #01-8] Gonna seleep for 17 milliseconds
     [chrome #01-8] Done sleeping
     [chrome #01-8] Finishing 'sc1.feature'
     [chrome #01-8] Starting 'sc1.feature'
     [chrome #01-8] Gonna seleep for 18 milliseconds
     [chrome #01-8] Done sleeping
     [chrome #01-8] Finishing 'sc1.feature'
     [chrome #01-8] 2 scenarios (2 passed)
     [chrome #01-8] 4 steps (4 passed)
     [chrome #01-8] 0m01.095s
     [chrome #01-8] [16:32:31] I/local - Shutting down selenium standalone server.
     [chrome #01-8] =======================
     [chrome #01-8] onCleanUp
     [chrome #01-8] ==========================
     [chrome #01-8] Exit code is: 0
     [chrome #01-8] ==========================
     
     [16:32:31] I/testLogger - 
     
     [16:32:31] I/launcher - 4 instance(s) of WebDriver still running
     ..[16:32:35] I/testLogger - 
     ------------------------------------
     
     [16:32:35] I/testLogger - [chrome #01-9] PID: 15003
     [chrome #01-9] Specs: /home/nsemenova/Documents/aps/protShard/test_features/feature_5/sc2.feature
     [chrome #01-9] 
     [chrome #01-9] (node:15003) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
     [chrome #01-9] [16:32:32] I/local - Starting selenium standalone server...
     [chrome #01-9] [16:32:32] I/local - Selenium standalone server started at http://10.192.36.16:42206/wd/hub
     [chrome #01-9] Starting 'sc2.feature'
     [chrome #01-9] Gonna seleep for 19 milliseconds
     [chrome #01-9] Done sleeping
     [chrome #01-9] Finishing 'sc2.feature'
     [chrome #01-9] Starting 'sc2.feature'
     [chrome #01-9] Gonna seleep for 20 milliseconds
     [chrome #01-9] Done sleeping
     [chrome #01-9] Finishing 'sc2.feature'
     [chrome #01-9] 2 scenarios (2 passed)
     [chrome #01-9] 4 steps (4 passed)
     [chrome #01-9] 0m01.109s
     [chrome #01-9] [16:32:35] I/local - Shutting down selenium standalone server.
     [chrome #01-9] =======================
     [chrome #01-9] onCleanUp
     [chrome #01-9] ==========================
     [chrome #01-9] Exit code is: 0
     [chrome #01-9] ==========================
     
     [16:32:35] I/testLogger - 
     
     [16:32:35] I/launcher - 3 instance(s) of WebDriver still running
     

    ```

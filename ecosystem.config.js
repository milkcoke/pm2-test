module.exports = {
    apps : [{
        name   : "node_test",
        script : "dist/node14_express.js",
        exec_mode: 'cluster',
        max_memory_restart: '4G',
        max_old_space_size: '4096M',
        node_args: '--expose-gc',
        instances: 6,
        // watch option 은 이 파일 위치가 아닌 pm2 실행 디렉토리 기준임.
        // 그리고 여기 있는 경로조차 명령어를 "실행하는" 디렉토리 기준임.
        // => pm2 를 실행시키는 위치는 항상 project root 가 되어야함.
        watch: ['dist'],
        // ignore_watch: ['**/logs/*', 'dist'],
        // out_file: 'logs/out.log',
        // error_file: 'logs/error.log',
    },
    {
        name   : "another_app",
        script : "dist/node16_express.js",
        exec_mode: 'cluster',
        node_args: '--expose-gc',
        instances: 2,
        watch: ['dist'],
        // ignore_watch: ['**/logs/*', 'dist'],
    },
    {
        name   : "gc_app",
        script : "dist/memory_leak.js",
        exec_mode: 'cluster',
        node_args: '--trace-gc --expose-gc',
        max_old_space_size: '50M',
        instances: 2,
        watch: ['dist'],
    }
    ]
}

// CLI
// pm2 start dist/test_node14.js --name "another_app" -i 2 --watch
// pm2 start dist/test_node16.js --name "node_test" -i 6 --watch

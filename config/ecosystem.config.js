module.exports = {
    apps : [{
        name   : "node_test",
        script : "../dist/test_node16.js",
        exec_mode: 'cluster',
        max_memory_restart: '32G',
        max_old_space_size: '327680M',
        instances: 6,
        watch: true,
        out_file: '../logs/out.log',
        error_file: '../logs/error.log'
    }]
}

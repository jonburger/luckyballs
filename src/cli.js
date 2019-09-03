export function cli(args) {
    const opts = process.argv.slice(2);
    let runs = /^\d+$/.test(opts[0]) ? Math.max(1, parseInt(opts.shift())) : 1;

    if (opts.length === 0) {
        console.error('\x1b[31m%s\x1b[0m', `Arguments must be provided in the format <count>:<maxvalue>`);
        return;
    }

    while (runs--) {
        let nums = [];

        opts.forEach(arg => {
            const match = /^(?<count>\d+):(?<total>\d+)$/.exec(arg);

            if (!match) {
                console.error('\x1b[31m%s\x1b[0m', `Argument "${arg}" must be integers in the format <count>:<maxvalue>`);
                return;
            }

            const count = parseInt(match.groups.count);
            const total = parseInt(match.groups.total);

            if (isNaN(count) || count < 1 || isNaN(total) || total < 1) {
                console.error('\x1b[31m%s\x1b[0m', `Argument "${arg}" must be integers in the format <count>:<maxvalue>`);
                return;
            }

            const balls = Array(total).fill().map((item, i) => (i + 1 + '').padStart(2, '0'));
            const lucky = [];

            for (let i = 0; i < count; i++) {
                lucky.push(shuffle(balls, 10).pop());
            }

            nums.push(lucky.join(' '));
        });

        console.log('\x1b[32m%s\x1b[0m', nums.join('\x1b[0m \x1b[2m-\x1b[0m \x1b[32m'));
    }
}

function shuffle(arr, count = 1) {
    for (let k = 0; k < count; k++) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}
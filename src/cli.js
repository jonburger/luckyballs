export function cli(args) {
    const opts = process.argv.slice(2);
    let nums = [];

    opts.forEach(arg => {
        let match = /(?<count>\d+):(?<total>\d+)/.exec(arg);

        if (!match) {
            console.error('\x1b[31m%s\x1b[0m', `Argument "${arg}" must integers in the format <count>:<maxvalue>`);
            return;
        }

        let count = parseInt(match.groups.count);
        let total = parseInt(match.groups.total);

        if (isNaN(count) || count < 1 || isNaN(total) || total < 1) {
            console.error('\x1b[31m%s\x1b[0m', `Argument "${arg}" must integers in the format <count>:<maxvalue>`);
            return;
        }

        let balls = Array(total).fill().map((item, i) => i + 1);
        let lucky = [];

        for (let i = 0; i < count; i++) {
            lucky.push(shuffle(balls).pop());
        }

        nums.push(lucky.join(' '));
    });

    console.log('\x1b[32m%s\x1b[0m', nums.join('\x1b[0m \x1b[2m-\x1b[0m \x1b[32m'));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
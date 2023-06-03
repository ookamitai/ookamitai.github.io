/**
 * 获得一个随机数。
 * @param {number} min 最小值。
 * @param {number} max 最大值。
 * @returns {number} 在 min, max 区间的随机值。
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
/**
 * 获得 url 参数。
 * @param {string} param 参数名。
 * @returns {string | undefined} 参数内容。
 */
function getURLParameter(param) {
  let params = window.location.search.substring(1).split('&')
  for (const i of params) {
    let name = i.split('=')
    if (name[0] == param) return name[1]
  }
}
let pkg_list = {
  crex: 'https://github.com/ookamitai/cREX/releases/',
  vb_d_karojpn_quiet:
    'https://drive.google.com/file/d/1LOCQRmmFGH-HdmgVXcqQIVitpknV_VpL',
  bfv: 'https://github.com/ookamitai/bfv',
  art: 'https://drive.google.com/file/d/1wzJuR2MT9yljZcQJ08Sel-n0TOJMR8uy'
}
let username = 'Guest'
let curDate = new Date()
let command = getURLParameter('af')
let quoteid = randomNumber(1, 100000)
let greet = ''
if (typeof command != 'undefined') {
  command = command.toLowerCase()
  if (command in pkg_list) {
    greet = `Requested page -> ${pkg_list[command]}\n\n`
  } else {
    greet = 'Requested page does not exist.\n\n'
  }
} else {
  greet = ''
}
greet +=
  '-> New artwork has come out! Download png and psd by executing:\n    fetch art\n\n'
greet +=
  '-> To whoever (found this website and) wanted to download my voicebank:\n' +
  'This voicebank is not finished yet! I have a date in my mind, which is about Jan 1st, 2023, to officially release it. \nEVERYTHING from recordings and artworks are unstable as they may change without any notification.\n\n' +
  "Welcome to ookamitai's webpage!\nUse 'help' for a list of commands.\nLogin time: " +
  Date() +
  '\n\nNumber of the day: ' +
  quoteid +
  '\n'

if (quoteid % 7 == 5) {
  quoteid = "Hi, I'm ookamitai, with love."
}

$('body').load(() => {
  $('body').terminal(
    {
      whoami: function () {
        this.echo(
          'Hello there! I am ookamitai (he/him/his), a quirky guy.\n' +
            'Speaking: American English/Japanese/Chinese\n' +
            'Mainly use UTAU and VOCALOID to create song covers.'
        )
      },

      credits: function () {
        this.echo('Powered by jQuery.')
      },

      fetch: function (fname) {
        if (typeof str == 'string') {
          fname = fname.toLowerCase()
        }
        if (fname in pkg_list) {
          this.echo('Retrieving file...')
          window.open(pkg_list[fname], '_blank')
          this.echo('Opened the page in a new tab.')
        } else if (fname == '-list') {
          this.echo(`Available packages:\n${Object.keys(pkg_list)}`)
        } else {
          this.echo('File not found!')
          this.echo(
            "Please use 'fetch -list' to view a list of available files."
          )
        }
      },

      echo: function (text) {
        this.echo(text)
      },

      help: function () {
        this.echo(
          'whoami - a brief introduction of myself! \n' +
            'credits - show credits \n' +
            'fetch [fname] - retrieve a file \n' +
            'echo - print out strings on the screen \n' +
            'clear - clear the screen \n' +
            'update - show update log'
        )
      },

      update: function () {
        this.echo(
          '11/25 Re-uploaded my outdated voicebank.\n' +
            '5/15 Added TAB completion.\n' +
            '5/17 Added NOD (Number Of the Day) for future purposes :3'
        )
      }
    },
    {
      greetings: greet,
      prompt:
        '[' +
        username +
        '@' +
        (
          curDate.getHours() * 3600 +
          curDate.getMinutes() * 60 +
          curDate.getSeconds()
        )
          .toString(16)
          .toUpperCase() +
        ']> ',
      completion: [
        'whoami',
        'credits',
        'fetch',
        'clear',
        'help',
        'echo',
        'update'
      ],
      autocompleteMenu: false
    }
  )
})

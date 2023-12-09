/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'mac-wall': "url('https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      'mac-finder': "url('https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png')",
      'mac-safari': "url('https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/512/safari-icon.png')",
      'mac-xcode': "url('https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png')",
      'lines':"url('https://img.freepik.com/premium-vector/abstract-wave-line-art-background_144721-1801.jpg?w=2000')"
      // 'mac-finder': "url('https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png')",
    },
    extend: {
      fontFamily: {
        Grot: ['Darker Grotesque']
      }
    },
  },
  plugins: [],
}

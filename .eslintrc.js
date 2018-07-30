module.exports = {
  "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
    "import/no-unresolved": "off",//path
    "import/prefer-default-export": "off",
    "no-shadow": "off",//session in GameContainer
    "implicit-arrow-linebreak": "off",//in sessionactions
    "react/jsx-no-bind": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",//
    "react/destructuring-assignment": "off",
    "import/no-named-as-default":"off",
    "react/jsx-closing-tag-location":"off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback":"off",
    "react/self-closing-comp":"off"
    

  },
   "globals": {"fetch": false},
  "env": {
    "browser": true
  }
  
};
# Integrating Third Party APIs

### This application renders a linechart displaying the stock prices of Apple Inc. (AAPL). 

Error handling for unsuccessful API responses included in async fetch response function. Receiving fetch response dataa as 'stockData' an array of data strings representing Apple Inc. stock market pricing for each day in evaluation, and 'data' which is an array of single dataset objects dataset objects to be mapped and included within the line chart. Useeffect hook loads fetch request on page start-up and refresh requiring no user interaction to function. 

Third-party APIs used: 
- Market Stack https://marketstack.com/documentation


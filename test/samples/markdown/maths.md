# Machine Learning

<br>

## Types of ML Problems

| Algorithm Type |       Problem Type       |                 Description                  |             Traditional ML Models             |        Examples        |
| -------------- | ------------------------ | -------------------------------------------- | --------------------------------------------- | ---------------------- |
| Supervised     | Classification           | Boolean                                      | Naive Bayes, </br> SVMs, </br> Decision trees | Trash or Inbox         |
|                | Regression               | Extrapolation                                | Linear, </br> Lasso, </br> Ridge, </br> SVR   |                        |
| Unsupervised   | Clustering               | Identify patterns in data sets               | K-means clustering                            |                        |
|                | Rule-extraction          |                                              |                                               | Recommendation systems |
| Unsupervised   | Dimensionality reduction | Identify significant factors that drive data | PCA                                           |                        |


<br>

## Types of ML Algorithms
### Supervised Machine Learning  (classification)
  - Labels associated with the training data is used to correct the algorithm.
  - Most machine learning algorithms seek to "learn" the function that links the features to the labels (`y = f(x)`)
  - $y = Wx + b$
    - Linear regression specifies, up front, that the function `f` is linear.
### Unsupervised Machine Learning
  - The model has to be set up right to learn structure in data.
    - Don't work off of a lebled corpus

|       |                                  Supervised                                  |                          Unsupervised                           |
| :---: | :--------------------------------------------------------------------------- | :-------------------------------------------------------------- |
|       | Input variable `x` and output variable `y`                                   | Only have input data `x` - no output data                       |
|       | Learn the mapping function `y = f(x)`                                        |                                                                 |
|       | Approximate the mapping function so for new values of `x` we can predict `y` | Model the underlying structure to learn more about data         |
|       | Use existing dataset to *correct* our mapping function approximation         | Algorithms self discover the patterns and structure in the data |

<br>

## Standardizing Data: Mean & Variance
- Mean as Headline 
  - The mean, or average, is the one number that best represents all of these data points.
  - $$\bar{x} = {x_1 + x_2 + ... + x_n \over n}$$
  - *Mean Deviation* - refers to how far every data point is from the average of those data points.
- Variation as Asterisk
  - The range ignores the mean, and is swayed by outliers (that's where variance comes in)
  - The sum of the squares of the distances of every individual 
  - $Range = x_{max} - x_{min}$
- Mean & Variance succinctly summarize a set of numbers.

<br>

## Terms
- **corpus**
  - data
- **input** (*Feature Vector*, test/prediction instance)
  - One record for which we want a prediction result.
- **output** 
  - (*label*/ *predicted label*)
- **Traditional** ML-based systems still rely on experts to decide whate features to pay attention to.
- **Representation** ML-based systems figure out by themeselves what features to pay attention to.
  - *Deep learning models* such as neural networks.
  - Neural networks only process numeric input, they don’t work with plain text
- **Training**
  - Feed in a large corpus of data classified correctly.
- **Prediction**
  - Use it to classify new instances which it has not seen before.
- **Feedback**
  - Loss function or cost function.
- **x** Variables
  - The attributes that the ML algorithm focuses on are called *features*.
  - Each data point is a list, or *vector*, of such features.
- **y** variables
  - The attributes that the ML alorithm tries to predict are called *lables*.
  - Types of labels:
    - categorical (classification)
    - continuous (regression)
- **Continuous Variables**
  - Can take an infinite set of values 
  - (height, weight, income...)
- **Categorical Variables** 
  - Can take a finite set of values 
  - (Male/Female, Day of week...)
  - Categorical variables that can take just two values are called **binary variables**

## Formulas

- Variance 
  - $Variance = {\Sigma(x_i - \bar{x})^2 \over n-1}$
- Mean
  - $\bar{x} = {x_1 + x_2 + ... + x_n \over n}$
- Range
  - $Range = x_{max} - x_{min}$
- Standard Deviation is the square root of variance
  - $Variance = {\Sigma(x_i - \bar{x})^2 \over n-1}$

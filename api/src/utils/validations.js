function validateDogCreationFields({
  name,
  image,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  minLifeSpan,
  maxLifeSpan,
  temperaments,
}) {
  if (
    !minHeight ||
    !maxHeight ||
    !minWeight ||
    !maxWeight ||
    !minLifeSpan ||
    !maxLifeSpan ||
    !name ||
    !image
  ) {
    throw new Error("You must fill in all the required information");
  } else if (
    minHeight <= 0 ||
    maxHeight <= 0 ||
    minWeight <= 0 ||
    maxWeight <= 0 ||
    minLifeSpan <= 0 ||
    maxLifeSpan <= 0
  ) {
    throw new Error("The height, weight or life span value cannot be negative");
  } else if (minHeight >= maxHeight) {
    throw new Error(
      "The minimum height is greater than or equal to the maximum height, please validate data"
    );
  } else if (minWeight >= maxWeight) {
    throw new Error(
      "The minimum weight is greater than or equal to the maximum weight, please validate data"
    );
  } else if (minLifeSpan >= maxLifeSpan) {
    throw new Error(
      "The minimum life span is greater than or equal to the maximum weight, please validate data"
    );
  }
}

module.exports = {
  validateDogCreationFields,
};

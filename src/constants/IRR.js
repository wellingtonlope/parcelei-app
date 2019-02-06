// Copyright (c) 2012 Sutoiku, Inc. (MIT License)

// Some algorithms have been ported from Apache OpenOffice:

/** ************************************************************
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 ************************************************************ */

function IRR(values, guess) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Calculates the resulting amount
  const irrResult = (values, dates, rate) => {
    const r = rate + 1
    let result = values[0]
    for (let i = 1; i < values.length; i++) {
      result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365)
    }
    return result
  }

  // Calculates the first derivation
  const irrResultDeriv = (values, dates, rate) => {
    const r = rate + 1
    let result = 0
    for (let i = 1; i < values.length; i++) {
      const frac = (dates[i] - dates[0]) / 365
      result -= (frac * values[i]) / Math.pow(r, frac + 1)
    }
    return result
  }

  // Initialize dates and check that values contains at least one positive value and one negative value
  const dates = []
  let positive = false
  let negative = false
  for (let i = 0; i < values.length; i++) {
    dates[i] = i === 0 ? 0 : dates[i - 1] + 365
    if (values[i] > 0) positive = true
    if (values[i] < 0) negative = true
  }

  // Return error if values does not contain at least one positive value and one negative value
  if (!positive || !negative) return '#NUM!'

  // Initialize guess and resultRate
  const guessInitial = typeof guess === 'undefined' ? 0.1 : guess
  let resultRate = guessInitial

  // Set maximum epsilon for end of iteration
  const epsMax = 1e-10

  // Set maximum number of iterations
  const iterMax = 50

  // Implement Newton's method
  let newRate
  let epsRate
  let resultValue
  let iteration = 0
  let contLoop = true
  do {
    resultValue = irrResult(values, dates, resultRate)
    newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate)
    epsRate = Math.abs(newRate - resultRate)
    resultRate = newRate
    contLoop = epsRate > epsMax && Math.abs(resultValue) > epsMax
  } while (contLoop && ++iteration < iterMax)

  if (contLoop) return '#NUM!'

  // Return internal rate of return
  return resultRate
}

export default IRR

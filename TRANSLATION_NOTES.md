# English Translation and Method Notes

This document records editorial choices in the English edition. The Chinese edition remains the source of record.

## Confirmed dataset description

The 3,022 analytical points are **not 3,022 independently observed flood incidents**. The source data are vector polygons representing areas mapped as flood-prone under the specified rainfall scenario or areas previously recorded as inundated. The geometric centroid of each polygon was calculated to create a point layer for analysis.

The English edition therefore uses **flood-area centroid** after defining the dataset in full. This wording distinguishes the analytical points from actual incident locations while retaining their connection to the mapped flood areas.

## Terminology glossary

| Chinese | English used in this edition | Note |
| --- | --- | --- |
| 古水道／古水路 | historic waterway | Broader and more neutral than “ancient waterway.” |
| 水圳 | irrigation canal | Proper names retain Chinese characters at first mention. |
| 暗渠化 | conversion into an underground culvert / culverting | Selected according to sentence structure. |
| 積淹水潛勢點位 | flood-area centroid | Defined as a centroid derived from a mapped flood-prone or previously inundated polygon; not an independently observed incident. |
| 地貌記憶 | landscape memory | Retained as the project’s central theoretical term. |
| 微地形 | microtopography | Standard physical-geography terminology. |
| 單位寬度密度 | band-width-normalized point count | Number of centroids divided by distance-band width; not an areal density. |
| 宣洩不及 | drainage capacity is exceeded | Translated by hydrological meaning rather than literally. |
| 平地限制性蒙地卡羅 | plain-constrained Monte Carlo | “Plain” means lowland terrain, not “simple.” |

## Method recommendations

### 1. Distance-band measure

The existing calculation is best described as **band-width-normalized point count**, with units of centroids per metre of band width. It is an exploratory distance-decay indicator, not conventional spatial density.

For a stronger analysis, construct mutually exclusive distance bands (0–10 m, 10–30 m, 30–60 m, and 60–120 m), clip them to the eligible study area, calculate the actual land area of each band, and report:

```
areal centroid density = centroid count / eligible band area
```

Use centroids per km² as the unit. Because centroids originate from polygons of potentially different sizes, a second sensitivity analysis should also measure the area or proportion of flood polygons intersecting each band.

### 2. Buffer statement

The buffers contain 123 of 3,022 centroids, or 4.07%. This establishes overlap only. It does not establish that flood density or risk is four times higher near historic waterways.

A relative-density statement requires:

```
inside density  = centroids inside buffers / eligible buffer area
outside density = centroids outside buffers / eligible background area
density ratio   = inside density / outside density
```

Overlapping 15 m, 30 m, and 50 m buffers must be dissolved or analyzed as separate, non-overlapping distance bands so areas and points are not counted more than once.

### 3. Monte Carlo significance

For each randomization, calculate the same statistic used for the observed data: the median distance from 3,022 sampled points to the nearest historic waterway. Let $r$ be the number of simulated median distances less than or equal to the observed median for this one-sided test, and let $B=1{,}000$.

Report the finite-simulation estimate:

```
p = (r + 1) / (B + 1)
```

If none of the 1,000 simulations is as small as the observed value, report:

> None of the 1,000 simulated median distances was as small as the observed median (one-sided Monte Carlo $p = 1/1001 \approx 0.001$).

This is clearer than reporting $p < 0.001$, because the number of simulations limits the available precision. For a more precise tail probability, increase the run count to at least 9,999 simulations and set a reproducible random seed.

## Confirmed naming choice

The English edition currently uses **Liugong**, **Wulixue**, and **Dapinglin** for 瑠公圳, 霧裡薛圳, and 大坪林圳. Chinese characters are retained at first mention.

## Remaining editorial checks

1. Confirm whether each source polygon is tagged as modeled flood-prone, previously inundated, or both. If those categories exist, report them separately.
2. Confirm the preferred scholarly English title for 《臺灣堡圖》. This edition provisionally uses *Taiwan Fortress Map* and retains the Chinese title.
3. Verify that the eligible sampling mask used in the Monte Carlo simulation is exactly the same spatial population against which the observed point pattern should be compared.
4. Meinig and Sauer support layered readings of landscape, but the precise attribution of “landscape as palimpsest” should be checked against the cited passages before formal academic publication.

## Editorial principles

- Proper nouns remain identifiable in English and Chinese.
- Claims are translated conservatively; “supports” is preferred to “proves” where causal identification is not established.
- English prose follows academic English syntax rather than Chinese word order.
- Quantities are unchanged; descriptions of the measures have been clarified.

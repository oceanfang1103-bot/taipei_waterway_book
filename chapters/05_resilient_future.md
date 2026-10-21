# Chapter 5 — Conclusion: Recovering Landscape Memory Beneath the Concrete

> **“As extreme rainfall increasingly challenges the limits of modern infrastructure, flooding may be one way in which nature and urban history repeatedly make themselves visible through microtopography.”**

---

### 5.1 Historic Waterways and Microtopography: Bidirectional Causality

The flood-susceptibility data used in this study already encode many characteristics of surface microtopography. At a deeper geomorphological level, the relationship between historic waterways and microtopography may operate in both directions.

#### 1. Pre-existing Topographical Constraint

When irrigation canals such as the Liugong system were constructed during the Qing and Japanese colonial periods, builders relied on gravity to move water efficiently. Canal routes therefore tended to follow relatively low natural valleys, shallow depressions, or abandoned channels in the Taipei Basin.

#### 2. Anthropogenic Geomorphological Shaping

Decades or centuries of canal operation and water erosion may have further shaped and reinforced depressions in and around the channels. Even after canals were covered, culverted, or filled and converted into roads, these linear spaces may retain microtopographic depressions that cannot be completely erased by artificial fill.

Whether canals were constructed because the land was already low, or prolonged canal flow helped maintain low-lying corridors, the historic axes overlap physical pathways along which runoff naturally gathers in the Taipei Basin. This bidirectional relationship helps explain why historic-waterway corridors may remain spatially associated with modern urban flood susceptibility despite intensive redevelopment.

---

### 5.2 Empirical Findings and Landscape Memory

Combining GIS-based spatial analysis with a human-geographical perspective, this study examines 3,022 flood-susceptibility locations in Taipei to investigate the relationship between the city’s concealed irrigation network and present-day flooding patterns.

The principal findings are:

- **Distance-decay pattern:** After adjusting point counts for distance-band width, the concentration of flood-susceptibility points generally declines with increasing distance from historic waterways, reaching 14.90 points/m in the 0–10 m band.
- **Significant spatial proximity:** In the plain-constrained Monte Carlo simulation, the observed median distance to historic waterways (125.72 m) is substantially lower than the random expectation (203.68 m; $p < 0.001$).

These results support the hypothesis of **landscape memory**: although the Liugong and Wulixue canals have disappeared from the surface beneath asphalt roads, associated microtopographic structures may continue to influence the direction of water during extreme rainfall.

---

### 5.3 Limitations and a Shift in Urban-Governance Perspective

The study does not seek to reduce Taipei’s complex flooding problem to “historic-waterway determinism.” A city is a complex system in which natural geology, historical land development, modern engineering, and socioeconomic processes are closely entangled.

- Historic-waterway microtopography is only one natural factor influencing the collection of surface runoff.
- Actual flooding reflects the combined effects of intense short-duration rainfall, extensive impervious surfaces, stormwater-network capacity, local topography, and uneven patterns of urban development.

The main contribution of this study is a **different observational perspective**. Alongside a governance paradigm centered on expanding pipes and other grey infrastructure, human geography can draw attention to the history of the land and the inherited texture of its terrain. As climate extremes increasingly challenge modern engineering systems, floodwater may reveal landscape structures that the visible city has obscured.

---

### 5.4 References and Data Sources

#### References

1. **Meinig, D. W. (1979).** The beholding eye: Ten versions of the same scene. In D. W. Meinig (Ed.), *The Interpretation of Ordinary Landscapes: Geographical Essays* (pp. 33–48). Oxford University Press. *(Cited as a conceptual source for reading landscapes as layered texts or palimpsests.)*
2. **Sauer, C. O. (1925).** The morphology of landscape. *University of California Publications in Geography*, 2(2), 19–53. *(A foundational work on the cultural landscape.)*
3. **Hydraulic Engineering Office, Public Works Department, Taipei City Government.** *Taipei City Stormwater Sewer Master Plan* [Chinese].
4. **Liugong Irrigation Association.** *History of the Liugong Canal and Water-Management Development in the Taipei Basin* [Chinese].

#### GIS layers and data sources

| Layer | Type | Source | Processing |
| :--- | :--- | :--- | :--- |
| **Taipei flood-susceptibility layer** | Polygon | Water Resources Agency / Taipei City Government; 650 mm in 24 hours scenario | Geometric correction and polygon-centroid extraction, producing 3,022 point locations |
| **Qing-period and Japanese-period historic waterways** | Line | Taiwan Centurial Historical Map; *Taiwan Fortress Map* and the 1939 *Map of the Liugong Irrigation Association District* | Manual vectorization and reconstruction of the Liugong, Wulixue, and Dapinglin main canals and branches |
| **Physical channel-width model** | Buffer polygon | Produced for this study | Widths modeled from historical sources: 5 m for main canals, 2 m for branches, and 1 m for minor distribution channels |
| **Administrative boundaries and terrain base data** | Polygon/raster | Ministry of the Interior TGOS platform | Boundary mask for constrained Monte Carlo sampling; slopes greater than 30% excluded |

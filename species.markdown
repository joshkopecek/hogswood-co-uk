---
layout: datatable
title: Species
description: A list of the species that have been observed in Hog's Wood, Okehampton
permalink: /species/
image: /assets/images/slowworms.jpg
---
<table id="datatable">
 <thead>
    <tr>
      <th scope="col">Latin name</th>
      <th scope="col">Common Name</th>
      <th scope="col">Type</th>
      <th scope="col">Date</th>
      <th scope="col">Location</th>
      <th scope="col">Grid reference</th>
      <th scope="col">Number</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
  {% for specie in site.data.species-list %}
    <tr>
      <th>
        {{ specie.latin }}
      </th>
      <td>
        {{ specie.common }}
      </td>
      <td>
        {{ specie.type }}
      </td>
      <td>
        {{ specie.date }}
      </td>
      <td>
        {{ specie.location }}
      </td>
      <td>
        {{ specie.grid }}
      </td>
      <td>
        {{ specie.number }}
      </td>
      <td>
        {{ specie.notes }}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

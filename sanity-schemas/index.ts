// Sanity Schema Index
// Copy this to your Sanity Studio schemaTypes/index.ts

import {programType} from './program'
import {previousEditionType} from './previousEdition'
import {workshopType} from './workshop'
import {galleryImageType} from './galleryImage'
import {teamMemberType} from './teamMember'

export const schemaTypes = [
  programType,
  previousEditionType,
  workshopType,
  galleryImageType,
  teamMemberType,
]

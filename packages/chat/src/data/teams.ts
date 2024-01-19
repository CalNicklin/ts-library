import { th } from 'date-fns/locale'
import { isTeam, isTypedArray } from '../type-guards'
import { ITeam } from '../types'
import { apiCall } from '../utils/networking'

let cachedAllTeamsList
export async function getAllTeams(): Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams').then((maybeTeams) => {
      if (isTypedArray(maybeTeams, isTeam)) return maybeTeams
      else throw new Error('Teams list is malformed')
    })

  return await cachedAllTeamsList
}

const cachedTeamRecords = {}

export async function getTeamById(id: string): Promise<ITeam> {
  let cached = cachedTeamRecords[id]
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`)
  return await cached
}

import { describe, expect, it } from 'vitest'
import { PERSONAL, buildTask, canBill, defaultBillable } from '../game'
import { buildEntries } from '../stats'

describe('tareas sin proyecto (personales)', () => {
  it('no se facturan y suman tiempo', () => {
    const t = buildTask({ name: 'CV', seconds: 3600, projectId: null, billable: true, tags: [], date: '2026-11-16', projects: [], clients: [] })
    expect(t.amount).toBe(0)
    expect(canBill(null, [])).toBe(true)
    expect(defaultBillable(null, [], [])).toBe(false)
  })

  it('en estadísticas figuran como Personal', () => {
    const t = buildTask({ name: 'CV', seconds: 3600, projectId: null, billable: false, tags: [], date: '2026-11-16', projects: [], clients: [] })
    expect(buildEntries([t], [], [], [])[0].client).toBe(PERSONAL)
  })
})

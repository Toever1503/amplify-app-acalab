/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchMembers = /* GraphQL */ `
  query SearchMembers(
    $filter: SearchableMemberFilterInput
    $sort: [SearchableMemberSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMemberAggregationInput]
  ) {
    searchMembers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        nick
        password
        email
        introLine
        bankAccount
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        createdAt
        updatedAt
        memberProfileId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchProfiles = /* GraphQL */ `
  query SearchProfiles(
    $filter: SearchableProfileFilterInput
    $sort: [SearchableProfileSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProfileAggregationInput]
  ) {
    searchProfiles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        member {
          id
          nick
          password
          email
          introLine
          bankAccount
          createdAt
          updatedAt
          memberProfileId
        }
        academicInfo {
          id
          region
          type
          name
          createdAt
          updatedAt
          academicInfoProfileId
        }
        awardsInfo {
          nextToken
        }
        attendanceInfo {
          nextToken
        }
        createdAt
        updatedAt
        profileAcademicInfoId
        profileMemberId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      nick
      password
      email
      introLine
      bankAccount
      profile {
        id
        member {
          id
          nick
          password
          email
          introLine
          bankAccount
          createdAt
          updatedAt
          memberProfileId
        }
        academicInfo {
          id
          region
          type
          name
          createdAt
          updatedAt
          academicInfoProfileId
        }
        awardsInfo {
          nextToken
        }
        attendanceInfo {
          nextToken
        }
        createdAt
        updatedAt
        profileAcademicInfoId
        profileMemberId
      }
      createdAt
      updatedAt
      memberProfileId
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nick
        password
        email
        introLine
        bankAccount
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        createdAt
        updatedAt
        memberProfileId
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      member {
        id
        nick
        password
        email
        introLine
        bankAccount
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        createdAt
        updatedAt
        memberProfileId
      }
      academicInfo {
        id
        region
        type
        name
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        createdAt
        updatedAt
        academicInfoProfileId
      }
      awardsInfo {
        items {
          id
          title
          ranking
          grade
          createdAt
          updatedAt
          profileAwardsInfoId
        }
        nextToken
      }
      attendanceInfo {
        items {
          id
          classDays
          absent
          late
          leaveEarly
          disrupting
          special
          grade
          createdAt
          updatedAt
          profileAttendanceInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      profileAcademicInfoId
      profileMemberId
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member {
          id
          nick
          password
          email
          introLine
          bankAccount
          createdAt
          updatedAt
          memberProfileId
        }
        academicInfo {
          id
          region
          type
          name
          createdAt
          updatedAt
          academicInfoProfileId
        }
        awardsInfo {
          nextToken
        }
        attendanceInfo {
          nextToken
        }
        createdAt
        updatedAt
        profileAcademicInfoId
        profileMemberId
      }
      nextToken
    }
  }
`;
export const getAcademicInfo = /* GraphQL */ `
  query GetAcademicInfo($id: ID!) {
    getAcademicInfo(id: $id) {
      id
      region
      type
      name
      profile {
        id
        member {
          id
          nick
          password
          email
          introLine
          bankAccount
          createdAt
          updatedAt
          memberProfileId
        }
        academicInfo {
          id
          region
          type
          name
          createdAt
          updatedAt
          academicInfoProfileId
        }
        awardsInfo {
          nextToken
        }
        attendanceInfo {
          nextToken
        }
        createdAt
        updatedAt
        profileAcademicInfoId
        profileMemberId
      }
      createdAt
      updatedAt
      academicInfoProfileId
    }
  }
`;
export const listAcademicInfos = /* GraphQL */ `
  query ListAcademicInfos(
    $filter: ModelAcademicInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAcademicInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        region
        type
        name
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        createdAt
        updatedAt
        academicInfoProfileId
      }
      nextToken
    }
  }
`;
export const getAwardsInfo = /* GraphQL */ `
  query GetAwardsInfo($id: ID!) {
    getAwardsInfo(id: $id) {
      id
      title
      ranking
      profile {
        id
        member {
          id
          nick
          password
          email
          introLine
          bankAccount
          createdAt
          updatedAt
          memberProfileId
        }
        academicInfo {
          id
          region
          type
          name
          createdAt
          updatedAt
          academicInfoProfileId
        }
        awardsInfo {
          nextToken
        }
        attendanceInfo {
          nextToken
        }
        createdAt
        updatedAt
        profileAcademicInfoId
        profileMemberId
      }
      grade
      createdAt
      updatedAt
      profileAwardsInfoId
    }
  }
`;
export const listAwardsInfos = /* GraphQL */ `
  query ListAwardsInfos(
    $filter: ModelAwardsInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwardsInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        ranking
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        grade
        createdAt
        updatedAt
        profileAwardsInfoId
      }
      nextToken
    }
  }
`;
export const getAttendanceInfo = /* GraphQL */ `
  query GetAttendanceInfo($id: ID!) {
    getAttendanceInfo(id: $id) {
      id
      classDays
      absent
      late
      leaveEarly
      disrupting
      special
      profile {
        id
        member {
          id
          nick
          password
          email
          introLine
          bankAccount
          createdAt
          updatedAt
          memberProfileId
        }
        academicInfo {
          id
          region
          type
          name
          createdAt
          updatedAt
          academicInfoProfileId
        }
        awardsInfo {
          nextToken
        }
        attendanceInfo {
          nextToken
        }
        createdAt
        updatedAt
        profileAcademicInfoId
        profileMemberId
      }
      grade
      createdAt
      updatedAt
      profileAttendanceInfoId
    }
  }
`;
export const listAttendanceInfos = /* GraphQL */ `
  query ListAttendanceInfos(
    $filter: ModelAttendanceInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendanceInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classDays
        absent
        late
        leaveEarly
        disrupting
        special
        profile {
          id
          createdAt
          updatedAt
          profileAcademicInfoId
          profileMemberId
        }
        grade
        createdAt
        updatedAt
        profileAttendanceInfoId
      }
      nextToken
    }
  }
`;

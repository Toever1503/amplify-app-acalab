/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($filter: ModelSubscriptionMemberFilterInput) {
    onCreateMember(filter: $filter) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($filter: ModelSubscriptionMemberFilterInput) {
    onUpdateMember(filter: $filter) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($filter: ModelSubscriptionMemberFilterInput) {
    onDeleteMember(filter: $filter) {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
export const onCreateAcademicInfo = /* GraphQL */ `
  subscription OnCreateAcademicInfo(
    $filter: ModelSubscriptionAcademicInfoFilterInput
  ) {
    onCreateAcademicInfo(filter: $filter) {
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
export const onUpdateAcademicInfo = /* GraphQL */ `
  subscription OnUpdateAcademicInfo(
    $filter: ModelSubscriptionAcademicInfoFilterInput
  ) {
    onUpdateAcademicInfo(filter: $filter) {
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
export const onDeleteAcademicInfo = /* GraphQL */ `
  subscription OnDeleteAcademicInfo(
    $filter: ModelSubscriptionAcademicInfoFilterInput
  ) {
    onDeleteAcademicInfo(filter: $filter) {
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
export const onCreateAwardsInfo = /* GraphQL */ `
  subscription OnCreateAwardsInfo(
    $filter: ModelSubscriptionAwardsInfoFilterInput
  ) {
    onCreateAwardsInfo(filter: $filter) {
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
export const onUpdateAwardsInfo = /* GraphQL */ `
  subscription OnUpdateAwardsInfo(
    $filter: ModelSubscriptionAwardsInfoFilterInput
  ) {
    onUpdateAwardsInfo(filter: $filter) {
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
export const onDeleteAwardsInfo = /* GraphQL */ `
  subscription OnDeleteAwardsInfo(
    $filter: ModelSubscriptionAwardsInfoFilterInput
  ) {
    onDeleteAwardsInfo(filter: $filter) {
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
export const onCreateAttendanceInfo = /* GraphQL */ `
  subscription OnCreateAttendanceInfo(
    $filter: ModelSubscriptionAttendanceInfoFilterInput
  ) {
    onCreateAttendanceInfo(filter: $filter) {
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
export const onUpdateAttendanceInfo = /* GraphQL */ `
  subscription OnUpdateAttendanceInfo(
    $filter: ModelSubscriptionAttendanceInfoFilterInput
  ) {
    onUpdateAttendanceInfo(filter: $filter) {
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
export const onDeleteAttendanceInfo = /* GraphQL */ `
  subscription OnDeleteAttendanceInfo(
    $filter: ModelSubscriptionAttendanceInfoFilterInput
  ) {
    onDeleteAttendanceInfo(filter: $filter) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createAcademicInfo = /* GraphQL */ `
  mutation CreateAcademicInfo(
    $input: CreateAcademicInfoInput!
    $condition: ModelAcademicInfoConditionInput
  ) {
    createAcademicInfo(input: $input, condition: $condition) {
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
export const updateAcademicInfo = /* GraphQL */ `
  mutation UpdateAcademicInfo(
    $input: UpdateAcademicInfoInput!
    $condition: ModelAcademicInfoConditionInput
  ) {
    updateAcademicInfo(input: $input, condition: $condition) {
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
export const deleteAcademicInfo = /* GraphQL */ `
  mutation DeleteAcademicInfo(
    $input: DeleteAcademicInfoInput!
    $condition: ModelAcademicInfoConditionInput
  ) {
    deleteAcademicInfo(input: $input, condition: $condition) {
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
export const createAwardsInfo = /* GraphQL */ `
  mutation CreateAwardsInfo(
    $input: CreateAwardsInfoInput!
    $condition: ModelAwardsInfoConditionInput
  ) {
    createAwardsInfo(input: $input, condition: $condition) {
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
export const updateAwardsInfo = /* GraphQL */ `
  mutation UpdateAwardsInfo(
    $input: UpdateAwardsInfoInput!
    $condition: ModelAwardsInfoConditionInput
  ) {
    updateAwardsInfo(input: $input, condition: $condition) {
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
export const deleteAwardsInfo = /* GraphQL */ `
  mutation DeleteAwardsInfo(
    $input: DeleteAwardsInfoInput!
    $condition: ModelAwardsInfoConditionInput
  ) {
    deleteAwardsInfo(input: $input, condition: $condition) {
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
export const createAttendanceInfo = /* GraphQL */ `
  mutation CreateAttendanceInfo(
    $input: CreateAttendanceInfoInput!
    $condition: ModelAttendanceInfoConditionInput
  ) {
    createAttendanceInfo(input: $input, condition: $condition) {
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
export const updateAttendanceInfo = /* GraphQL */ `
  mutation UpdateAttendanceInfo(
    $input: UpdateAttendanceInfoInput!
    $condition: ModelAttendanceInfoConditionInput
  ) {
    updateAttendanceInfo(input: $input, condition: $condition) {
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
export const deleteAttendanceInfo = /* GraphQL */ `
  mutation DeleteAttendanceInfo(
    $input: DeleteAttendanceInfoInput!
    $condition: ModelAttendanceInfoConditionInput
  ) {
    deleteAttendanceInfo(input: $input, condition: $condition) {
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

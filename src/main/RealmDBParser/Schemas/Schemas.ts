import Realm from "realm";

// BeatmapSet Schema
export class BeatmapSet extends Realm.Object {
  ID!: Realm.BSON.UUID;
  OnlineID!: number;
  DateAdded!: Date;
  DateSubmitted?: Date | null;
  DateRanked?: Date | null;
  Beatmaps!: Realm.List<Beatmap>;
  Files!: Realm.List<RealmNamedFileUsage>;
  Status!: number;
  DeletePending!: boolean;
  Hash?: string | null;
  Protected!: boolean;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "BeatmapSet",
    properties: {
      ID: "uuid",
      OnlineID: "int",
      DateAdded: "date",
      DateSubmitted: "date?",
      DateRanked: "date?",
      Beatmaps: { type: "list", objectType: "Beatmap" },
      Files: { type: "list", objectType: "RealmNamedFileUsage" },
      Status: "int",
      DeletePending: "bool",
      Hash: "string?",
      Protected: "bool",
    },
    primaryKey: "ID",
  };
}

// Beatmap Schema
export class Beatmap extends Realm.Object {
  ID!: Realm.BSON.UUID;
  DifficultyName!: string;
  Ruleset?: Ruleset | null;
  Difficulty?: BeatmapDifficulty | null;
  Metadata?: BeatmapMetadata | null;
  UserSettings?: BeatmapUserSettings | null;
  BeatmapSet?: BeatmapSet | null;
  Status!: number;
  OnlineID!: number;
  Length!: number;
  BPM!: number;
  Hash?: string | null;
  StarRating!: number;
  MD5Hash?: string | null;
  OnlineMD5Hash?: string | null;
  LastLocalUpdate?: Date | null;
  LastOnlineUpdate?: Date | null;
  Hidden!: boolean;
  EndTimeObjectCount!: number;
  TotalObjectCount!: number;
  AudioLeadIn!: number;
  StackLeniency!: number;
  SpecialStyle!: boolean;
  LetterboxInBreaks!: boolean;
  WidescreenStoryboard!: boolean;
  EpilepsyWarning!: boolean;
  SamplesMatchPlaybackRate!: boolean;
  LastPlayed?: Date | null;
  DistanceSpacing!: number;
  BeatmapDivisor!: number;
  GridSize!: number;
  TimelineZoom!: number;
  EditorTimestamp?: number | null;
  CountdownOffset!: number;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "Beatmap",
    properties: {
      ID: "uuid",
      DifficultyName: "string",
      Ruleset: "Ruleset?",
      Difficulty: "BeatmapDifficulty?",
      Metadata: "BeatmapMetadata?",
      UserSettings: "BeatmapUserSettings?",
      BeatmapSet: "BeatmapSet?",
      Status: "int",
      OnlineID: "int",
      Length: "double",
      BPM: "double",
      Hash: "string?",
      StarRating: "double",
      MD5Hash: "string?",
      OnlineMD5Hash: "string?",
      LastLocalUpdate: "date?",
      LastOnlineUpdate: "date?",
      Hidden: "bool",
      EndTimeObjectCount: "int",
      TotalObjectCount: "int",
      AudioLeadIn: "double",
      StackLeniency: "float",
      SpecialStyle: "bool",
      LetterboxInBreaks: "bool",
      WidescreenStoryboard: "bool",
      EpilepsyWarning: "bool",
      SamplesMatchPlaybackRate: "bool",
      LastPlayed: "date?",
      DistanceSpacing: "double",
      BeatmapDivisor: "int",
      GridSize: "int",
      TimelineZoom: "double",
      EditorTimestamp: "double?",
      CountdownOffset: "int",
    },
    primaryKey: "ID",
  };
}

// Ruleset Schema
export class Ruleset extends Realm.Object {
  ShortName?: string | null;
  OnlineID!: number;
  Name?: string | null;
  InstantiationInfo?: string | null;
  LastAppliedDifficultyVersion!: number;
  Available!: boolean;

  static primaryKey = "ShortName";

  static schema: Realm.ObjectSchema = {
    name: "Ruleset",
    properties: {
      ShortName: "string?",
      OnlineID: "int",
      Name: "string?",
      InstantiationInfo: "string?",
      LastAppliedDifficultyVersion: "int",
      Available: "bool",
    },
    primaryKey: "ShortName",
  };
}

// BeatmapDifficulty Schema
export class BeatmapDifficulty extends Realm.Object {
  DrainRate!: number;
  CircleSize!: number;
  OverallDifficulty!: number;
  ApproachRate!: number;
  SliderMultiplier!: number;
  SliderTickRate!: number;

  static schema: Realm.ObjectSchema = {
    name: "BeatmapDifficulty",
    properties: {
      DrainRate: "float",
      CircleSize: "float",
      OverallDifficulty: "float",
      ApproachRate: "float",
      SliderMultiplier: "double",
      SliderTickRate: "double",
    },
  };
}

// BeatmapMetadata Schema
export class BeatmapMetadata extends Realm.Object {
  Title?: string | null;
  TitleUnicode?: string | null;
  Artist?: string | null;
  ArtistUnicode?: string | null;
  Author?: RealmUser | null;
  Source?: string | null;
  Tags?: string | null;
  PreviewTime!: number;
  AudioFile?: string | null;
  BackgroundFile?: string | null;

  static schema: Realm.ObjectSchema = {
    name: "BeatmapMetadata",
    properties: {
      Title: "string?",
      TitleUnicode: "string?",
      Artist: "string?",
      ArtistUnicode: "string?",
      Author: "RealmUser?",
      Source: "string?",
      Tags: "string?",
      PreviewTime: "int",
      AudioFile: "string?",
      BackgroundFile: "string?",
    },
  };
}

// RealmUser Schema
export class RealmUser extends Realm.Object {
  OnlineID!: number;
  Username?: string | null;
  CountryCode?: string | null;

  static schema: Realm.ObjectSchema = {
    name: "RealmUser",
    properties: {
      OnlineID: "int",
      Username: "string?",
      CountryCode: "string?",
    },
  };
}

// BeatmapUserSettings Schema
export class BeatmapUserSettings extends Realm.Object {
  Offset!: number;

  static schema: Realm.ObjectSchema = {
    name: "BeatmapUserSettings",
    properties: {
      Offset: "double",
    },
  };
}

// RealmNamedFileUsage Schema
export class RealmNamedFileUsage extends Realm.Object {
  Filename?: string | null;
  File?: File | null;

  static schema: Realm.ObjectSchema = {
    name: "RealmNamedFileUsage",
    properties: {
      Filename: "string?",
      File: "File?",
    },
  };
}

// File Schema
export class File extends Realm.Object {
  Hash?: string | null;

  static primaryKey = "Hash";

  static schema: Realm.ObjectSchema = {
    name: "File",
    properties: {
      Hash: "string?",
    },
    primaryKey: "Hash",
  };
}

export class Skin extends Realm.Object {
  ID!: Realm.BSON.UUID;
  Name?: string | null;
  Creator?: string | null;
  InstantiationInfo?: string | null;
  Hash?: string | null;
  Protected!: boolean;
  Files!: Realm.List<RealmNamedFileUsage>;
  DeletePending!: boolean;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "Skin",
    properties: {
      ID: "uuid",
      Name: "string?",
      Creator: "string?",
      InstantiationInfo: "string?",
      Hash: "string?",
      Protected: "bool",
      Files: { type: "list", objectType: "RealmNamedFileUsage" },
      DeletePending: "bool",
    },
    primaryKey: "ID",
  };
}

export class Score extends Realm.Object {
  ID!: Realm.BSON.UUID;
  BeatmapInfo?: Beatmap | null;
  ClientVersion?: string | null;
  BeatmapHash?: string | null;
  Ruleset?: Ruleset | null;
  Files!: Realm.List<RealmNamedFileUsage>;
  Hash?: string | null;
  DeletePending!: boolean;
  TotalScore!: number;
  TotalScoreVersion!: number;
  LegacyTotalScore?: number | null;
  BackgroundReprocessingFailed!: boolean;
  MaxCombo!: number;
  Accuracy!: number;
  Date!: Date;
  PP?: number | null;
  OnlineID!: number;
  LegacyOnlineID!: number;
  User?: RealmUser | null;
  Mods?: string | null;
  Statistics?: string | null;
  MaximumStatistics?: string | null;
  Rank!: number;
  Combo!: number;
  IsLegacyScore!: boolean;
  TotalScoreWithoutMods!: number;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "Score",
    properties: {
      ID: "uuid",
      BeatmapInfo: "Beatmap?",
      ClientVersion: "string?",
      BeatmapHash: "string?",
      Ruleset: "Ruleset?",
      Files: { type: "list", objectType: "RealmNamedFileUsage" },
      Hash: "string?",
      DeletePending: "bool",
      TotalScore: "int",
      TotalScoreVersion: "int",
      LegacyTotalScore: "int?",
      BackgroundReprocessingFailed: "bool",
      MaxCombo: "int",
      Accuracy: "double",
      Date: "date",
      PP: "double?",
      OnlineID: "int",
      LegacyOnlineID: "int",
      User: "RealmUser?",
      Mods: "string?",
      Statistics: "string?",
      MaximumStatistics: "string?",
      Rank: "int",
      Combo: "int",
      IsLegacyScore: "bool",
      TotalScoreWithoutMods: "int",
    },
    primaryKey: "ID",
  };
}

export class RulesetSetting extends Realm.Object {
  RulesetName?: string | null;
  Variant?: number | null;
  Key!: string;
  Value!: string;

  static schema: Realm.ObjectSchema = {
    name: "RulesetSetting",
    properties: {
      RulesetName: "string?",
      Variant: "int?",
      Key: "string",
      Value: "string",
    },
  };
}

export class ModPreset extends Realm.Object {
  ID!: Realm.BSON.UUID;
  Ruleset?: Ruleset | null;
  Name?: string | null;
  Description?: string | null;
  Mods?: string | null;
  DeletePending!: boolean;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "ModPreset",
    properties: {
      ID: "uuid",
      Ruleset: "Ruleset?",
      Name: "string?",
      Description: "string?",
      Mods: "string?",
      DeletePending: "bool",
    },
    primaryKey: "ID",
  };
}

export class KeyBinding extends Realm.Object {
  ID!: Realm.BSON.UUID;
  RulesetName?: string | null;
  Variant?: number | null;
  Action!: number;
  KeyCombination?: string | null;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "KeyBinding",
    properties: {
      ID: "uuid",
      RulesetName: "string?",
      Variant: "int?",
      Action: "int",
      KeyCombination: "string?",
    },
    primaryKey: "ID",
  };
}

export class BeatmapCollection extends Realm.Object {
  ID!: Realm.BSON.UUID;
  Name?: string | null;
  BeatmapMD5Hashes!: Realm.List<string>;
  LastModified!: Date;

  static primaryKey = "ID";

  static schema: Realm.ObjectSchema = {
    name: "BeatmapCollection",
    properties: {
      ID: "uuid",
      Name: "string?",
      BeatmapMD5Hashes: { type: "list", objectType: "string" },
      LastModified: "date",
    },
    primaryKey: "ID",
  };
}
